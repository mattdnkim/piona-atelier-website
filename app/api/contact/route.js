import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

// 폼에서 넘어온 배열형 필드(arrangements 체크박스)를 예쁘게 정리
function formatValue(value) {
  if (Array.isArray(value)) return value.join(", ") || "—";
  return value || "—";
}

function buildEmailHtml(payload) {
  const rows = [
    ["Name", payload.name],
    ["Email", payload.email],
    ["Event Type", payload.eventType],
    ["Event Date", payload.eventDate],
    ["Venue", payload.venue],
    ["Guest Count", payload.guestCount],
    ["Budget", payload.budget],
    ["Colour/Theme", payload.theme],
    ["Arrangements", formatValue(payload.arrangements)],
    ["Notes", payload.message],
  ];

  return `
    <h2>New Inquiry — Piona Atelier</h2>
    <table cellpadding="6" style="border-collapse:collapse;font-family:sans-serif;font-size:14px;">
      ${rows
      .map(
        ([label, value]) => `
        <tr style="border-bottom:1px solid #eee;">
          <td style="font-weight:600;white-space:nowrap;">${label}</td>
          <td>${formatValue(value)}</td>
        </tr>`
      )
      .join("")}
    </table>
  `;
}

export async function POST(request) {
  try {
    const formData = await request.formData();
    // arrangements는 체크박스 다중 선택이라 getAll로 받아야 함
    const payload = {
      name: formData.get("name"),
      email: formData.get("email"),
      eventType: formData.get("eventType"),
      eventDate: formData.get("eventDate"),
      venue: formData.get("venue"),
      guestCount: formData.get("guestCount"),
      budget: formData.get("budget"),
      theme: formData.get("theme"),
      arrangements: formData.getAll("arrangements"),
      message: formData.get("message"),
    };

    if (!payload.name || !payload.email || !payload.eventType || !payload.eventDate || !payload.venue) {
      return new Response(
        JSON.stringify({ ok: false, error: "Missing required fields" }),
        { status: 400, headers: { "Content-Type": "application/json" } }
      );
    }

    await resend.emails.send({
      from: "Piona Atelier Website <onboarding@resend.dev>", // 도메인 인증 후 hello@piona-atelier.com 등으로 교체
      to: process.env.CONTACT_EMAIL_TO, // 실제 받는 사람 이메일 (env로 관리)
      replyTo: payload.email,
      subject: `New Inquiry: ${payload.eventType} — ${payload.name}`,
      html: buildEmailHtml(payload),
    });

    return new Response(JSON.stringify({ ok: true }), {
      headers: { "Content-Type": "application/json" },
    });
  } catch (err) {
    console.error("Contact form error:", err);
    return new Response(
      JSON.stringify({ ok: false, error: "Failed to send message" }),
      { status: 500, headers: { "Content-Type": "application/json" } }
    );
  }
}