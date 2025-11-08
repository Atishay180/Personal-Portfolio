export const USER_QUERY_EMAIL_TEMPLATE = `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="utf-8" />
<meta name="viewport" content="width=device-width,initial-scale=1" />
<meta name="format-detection" content="telephone=no" />
<meta name="x-apple-disable-message-reformatting" />
<title>Message received — Atishay Jain</title>
<style>
  body { margin:0; padding:0; background:#0b0b0b; font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif; color:#E6EEF6; }
  a { color:#FFB86B; text-decoration:none; }
  .outer { width:100%; padding:36px 20px; box-sizing:border-box; }
  .container { max-width:600px; margin:0 auto; background:#111214; border:1px solid #232428; border-radius:10px; overflow:hidden; }
  .header { display:flex; align-items:center; gap:14px; padding:20px 24px; }
  .logo { width:40px; height:auto; padding-right:4px; display:block; }
  .support-note { color:#9aa0a6; font-size:13px; }
  .preview-wrap { padding:0 24px 18px; text-align:center; }
  .preview-img { width:100%; max-width:520px; border-radius:10px; border:1px solid #222427; display:block; margin:0 auto; }
  .hero { padding:22px 24px; }
  h1 { margin:0 0 10px; font-size:20px; line-height:1.2; color:#FFB86B; font-weight:700; }
  p { margin:0 0 12px; color:#cbd5e1; font-size:15px; line-height:1.6; }
  .message-preview { background:#0d0d0f; border:1px solid #222427; padding:12px 14px; border-radius:8px; color:#dbe7ef; margin:10px 0; font-size:14px; }
  .cta-wrap { padding:0 24px 28px; text-align:center; }
  .cta { display:inline-block; background:#ff4d7e; color:#fff; padding:12px 20px; border-radius:8px; font-weight:600; text-decoration:none; }
  .footer { padding:16px 24px 28px; color:#8b95a0; font-size:13px; text-align:center; }
  .muted { color:#8b95a0; font-size:13px; }
  @media only screen and (max-width:600px){
    .header{padding:16px 16px;}
    .hero{padding:16px;}
    .cta-wrap{padding:0 16px 20px;}
    h1{font-size:18px;}
  }
</style>
</head>
<body>
  <table role="presentation" width="100%" class="outer">
    <tr>
      <td align="center">
        <table role="presentation" class="container" width="100%">
          <tr>
            <td class="header">
              <img src="https://res.cloudinary.com/dg8lfsyon/image/upload/v1762581557/logoWithoutName_g8l3e5.png" alt="Atishay's Portfolio Logo" class="logo" />
              <div>
                <div style="font-size:14px; color:#E6EEF6; font-weight:600;">Atishay Jain</div>
                <div class="support-note">Typically reply within 24 - 48 hours</div>
              </div>
            </td>
          </tr>

          <!-- Top website preview image -->
          <tr>
            <td class="preview-wrap">
              <img src="https://res.cloudinary.com/dg8lfsyon/image/upload/v1762581273/Screenshot_114_bqaxun.png" alt="Website preview" class="preview-img" />
            </td>
          </tr>

          <tr>
            <td class="hero">
              <h1>Thanks, {{name}} — I got your message</h1>
              <p>Thanks for reaching out. I’ve received your message and will get back to you as soon as I can — usually within <strong>24 - 48 hours</strong>.</p>

              <div style="margin-top:10px; margin-bottom:6px; color:#9aa0a6; font-size:13px;">Message preview</div>
              <div class="message-preview">{{message}}</div>

              <p>If you need to add anything, reply to this email or contact me at <a href="mailto:{{contactEmail}}">{{contactEmail}}</a>.</p>
            </td>
          </tr>

          <tr>
            <td class="cta-wrap">
              <a class="cta" href="https://personal-portfolio-flax-chi-29.vercel.app" target="_blank" rel="noopener">View my portfolio</a>
            </td>
          </tr>

          <tr>
            <td class="footer">
              <div>Jabalpur, Madhya Pradesh (India)</div>
              <div style="margin-top:8px;">
                <a href="https://personal-portfolio-flax-chi-29.vercel.app">Unsubscribe</a> · <a href="https://personal-portfolio-flax-chi-29.vercel.app">View website</a>
              </div>
              <div style="margin-top:10px;">© ${new Date().getFullYear()} Atishay Jain</div>
            </td>
          </tr>

        </table>
      </td>
    </tr>
  </table>
</body>
</html>
`;

export const OWNER_EMAIL_TEMPLATE = `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="utf-8" />
<meta name="viewport" content="width=device-width,initial-scale=1" />
<meta name="format-detection" content="telephone=no" />
<meta name="x-apple-disable-message-reformatting" />
<title>New message received — {{topic}}</title>
<style>
  /* Base / reset */
  body { margin:0; padding:0; background:#0b0b0b; font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif; color:#E6EEF6; }
  a { color:#FFB86B; text-decoration:none; }
  table { border-collapse:collapse; }
  /* Layout */
  .outer { width:100%; padding:36px 20px; box-sizing:border-box; }
  .container { max-width:700px; margin:0 auto; background:#111214; border:1px solid #232428; border-radius:10px; overflow:hidden; }
  .header { display:flex; align-items:center; gap:14px; padding:20px 24px; }
  .logo { width:40px; height:auto; padding-right:4px; display:block; }
  .support-note { color:#9aa0a6; font-size:13px; }
  .preview-wrap { padding:0 24px 18px; text-align:center; }
  .preview-img { width:100%; max-width:640px; border-radius:10px; border:1px solid #222427; display:block; margin:0 auto; }
  .hero { padding:20px 24px; }
  h1 { margin:0 0 8px; font-size:20px; line-height:1.2; color:#FFB86B; font-weight:700; }
  p { margin:0 0 12px; color:#cbd5e1; font-size:15px; line-height:1.6; }
  .meta { display:flex; gap:12px; flex-wrap:wrap; margin:8px 0 14px; }
  .meta .pill { background:#0d0d0f; border:1px solid #222427; padding:8px 12px; border-radius:999px; color:#dbe7ef; font-size:13px; }
  .message-card { background:#0d0d0f; border:1px solid #222427; padding:14px 16px; border-radius:8px; color:#dbe7ef; margin:12px 0; font-size:14px; white-space:pre-wrap; }
  .details { margin-top:12px; font-size:14px; color:#9aa0a6; }
  .cta-wrap { padding:0 24px 24px; text-align:center; }
  .cta { display:inline-block; background:#FFB86B; color:#000; padding:12px 20px; border-radius:8px; font-weight:700; text-decoration:none; }
  .footer { padding:16px 24px 28px; color:#8b95a0; font-size:13px; text-align:center; }
  .muted { color:#8b95a0; font-size:13px; }
  /* Responsive */
  @media only screen and (max-width:600px){
    .header{padding:16px 16px;}
    .hero{padding:16px;}
    .preview-wrap{padding:0 16px 12px;}
    .cta-wrap{padding:0 16px 18px;}
    h1{font-size:18px;}
  }
</style>
</head>
<body>
  <table role="presentation" width="100%" class="outer">
    <tr>
      <td align="center">
        <table role="presentation" class="container" width="100%">

          <!-- Header -->
          <tr>
            <td class="header">
              <img src="https://res.cloudinary.com/dg8lfsyon/image/upload/v1762581557/logoWithoutName_g8l3e5.png" alt="Atishay's Portfolio Logo" class="logo" />
              <div>
                <div style="font-size:14px; color:#E6EEF6; font-weight:700;">Atishay Jain</div>
                <div class="support-note">New inquiry received — quick summary below</div>
              </div>
            </td>
          </tr>

          <!-- Optional top website preview image -->
          <tr>
            <td class="preview-wrap">
              <img src="https://res.cloudinary.com/dg8lfsyon/image/upload/v1762581273/Screenshot_114_bqaxun.png" alt="Website preview" class="preview-img" />
            </td>
          </tr>

          <!-- Main content -->
          <tr>
            <td class="hero">
              <h1>New message: {{topic}}</h1>
              <p>You received a new message via your portfolio contact form. Quick details are below — click the button to view the full conversation in the app or reply directly.</p>

              <div class="meta" role="navigation" aria-label="message meta">
                <div class="pill"><strong>From:</strong> {{name}}</div>
                <div class="pill"><strong>Email:</strong> <a href="mailto:{{email}}" style="color:#FFB86B;">{{email}}</a></div>
                <div class="pill"><strong>Topic:</strong> {{topic}}</div>
              </div>


              <div style="color:#9aa0a6; font-size:13px; margin-bottom:6px;">Message</div>
              <div class="message-card">{{message}}</div>
            </td>
          </tr>

          <!-- CTA -->
          <tr>
            <td class="cta-wrap">
              <a class="cta" href="https://personal-portfolio-flax-chi-29.vercel.app" target="_blank" rel="noopener">Open message in dashboard</a>
            </td>
          </tr>

          <!-- Footer -->
          <tr>
            <td class="footer">
              <div>Jabalpur, Madhya Pradesh (India)</div>
              <div style="margin-top:8px;">
                <a href="https://personal-portfolio-flax-chi-29.vercel.app">Unsubscribe</a> · <a href="https://personal-portfolio-flax-chi-29.vercel.app">View website</a>
              </div>
              <div style="margin-top:10px;">© ${new Date().getFullYear()} Atishay Jain</div>
            </td>
          </tr>

        </table>
      </td>
    </tr>
  </table>
</body>
</html>
`;