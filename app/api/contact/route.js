export async function POST(request) {
  const formData = await request.formData();
  const payload = Object.fromEntries(formData);
  // TODO: forward to email/Slack/sheets. For now, echo.
  return new Response(JSON.stringify({ ok: true, received: payload }), {
    headers: { "Content-Type": "application/json" }
  });
}
