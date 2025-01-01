export function getEmailTemplate(email, status, amount, orderId, fullName) {
  const currentDate = new Date();

  const AcceptedTemplate = `<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
  <html dir="ltr" lang="en">
    <head>
      <meta content="text/html; charset=UTF-8" http-equiv="Content-Type" />
      <meta name="x-apple-disable-message-reformatting" />
    </head>
    <body
      style='background-color:#f4f4f4;font-family:-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Oxygen-Sans,Ubuntu,Cantarell,"Helvetica Neue",sans-serif;padding:20px'
    >
      <table
        align="center"
        width="100%"
        border="0"
        cellpadding="0"
        cellspacing="0"
        role="presentation"
        style="max-width:600px;background-color:#ffffff;border-radius:8px;overflow:hidden"
      >
        <tbody>
          <tr>
            <td style="padding:20px;text-align:center">
              <h1 style="font-size:28px;color:#333;margin:20px 0">Hi, ${fullName}!</h1>
              <p style="font-size:16px;line-height:24px;color:#555;margin:20px 0">
                Hi ${fullName} you order Id: ${orderId} has been confirmed by the vendor it will be shipped soon.
              </p>
              <p style="font-size:16px;line-height:24px;color:#555;margin:20px 0">
                <b>Accepted Date:</b> ${currentDate}
              </p>
               <p style="font-size:16px;line-height:24px;color:#555;margin:20px 0">
                <b> paid Amount :</b> ${amount}
              </p>
              <p style="font-size:16px;line-height:24px;color:#555;margin:20px 0">
                Thank you for choosing us. If you have any questions, feel free to contact us!
              </p>
            </td>
          </tr>
          <tr>
            <td style="padding:20px;text-align:center;background-color:#f4f4f4">
              <small style="color:#888;font-size:12px">CareMe Team</small>
            </td>
          </tr>
        </tbody>
      </table>
    </body>
  </html>`;

  const CancelledTemplate = `<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
  <html dir="ltr" lang="en">
    <head>
      <link
        rel="preload"
        as="image"
        href="https://react-email-demo-lpdmf0ryo-resend.vercel.app/static/yelp-logo.png"
      />
      <link
        rel="preload"
        as="image"
        href="https://react-email-demo-lpdmf0ryo-resend.vercel.app/static/yelp-header.png"
      />
      <link
        rel="preload"
        as="image"
        href="https://react-email-demo-lpdmf0ryo-resend.vercel.app/static/yelp-footer.png"
      />
      <meta content="text/html; charset=UTF-8" http-equiv="Content-Type" />
      <meta name="x-apple-disable-message-reformatting" />
      <!--$-->
    </head>
    <div
      style="display:none;overflow:hidden;line-height:1px;opacity:0;max-height:0;max-width:0"
    >
      Shopping Store
      <div>
        
      </div>
    </div>
    <body
      style='background-color:#fff;font-family:-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Oxygen-Sans,Ubuntu,Cantarell,"Helvetica Neue",sans-serif'
    >
      <table
        align="center"
        width="100%"
        border="0"
        cellpadding="0"
        cellspacing="0"
        role="presentation"
        style="max-width:37.5em"
      >
        <tbody>
          <tr style="width:100%">
            <td>
              <table
                align="center"
                width="100%"
                border="0"
                cellpadding="0"
                cellspacing="0"
                role="presentation"
                style="padding:30px 20px"
              >
              </table>
              <table
                align="center"
                width="100%"
                border="0"
                cellpadding="0"
                cellspacing="0"
                role="presentation"
                style="border:1px solid rgb(0,0,0, 0.1);border-radius:3px;overflow:hidden"
              >
                <tbody>
                  <tr>
                    <td>
                      <table
                        align="center"
                        width="100%"
                        border="0"
                        cellpadding="0"
                        cellspacing="0"
                        role="presentation"
                      >
                        <tbody style="width:100%">
                          <tr style="width:100%">
                            <img
                              src="https://react-email-demo-lpdmf0ryo-resend.vercel.app/static/yelp-header.png"
                              style="display:block;outline:none;border:none;text-decoration:none;max-width:100%"
                              width="620"
                            />
                          </tr>
                        </tbody>
                      </table>
                      <table
                        align="center"
                        width="100%"
                        border="0"
                        cellpadding="0"
                        cellspacing="0"
                        role="presentation"
                        style="padding:20px;padding-bottom:0"
                      >
                        <tbody style="width:100%">
                          <tr style="width:100%">
                            <td data-id="__react-email-column">
                              <h1
                                style="font-size:32px;font-weight:bold;text-align:center"
                              >
                                Hi
                                <!-- -->${fullName}<!-- -->,
                              </h1>
                              <h2
                                style="font-size:26px;font-weight:bold;text-align:center"
                              >
                                Hi ${fullName} your order ${orderId} has been cancelled by the vendor
                              </h2>
                              <p
                                style="font-size:16px;line-height:24px;margin:16px 0"
                              >
                                <b>email: </b>${email}
                              </p>
                              <p
                                style="font-size:16px;line-height:24px;margin:16px 0;margin-top:-5px"
                              >
                                <b>Refund Amount </b>${amount}
                              </p>
                               <p style="font-size:16px;line-height:24px;color:#555;margin:20px 0">
                              <b> Date:</b> ${currentDate}
                              </p>
                              <p
                                style="font-size:14px;line-height:24px;margin:16px 0;color:rgb(0,0,0, 0.5);margin-top:-5px"
                              >
                                you amount will be refunded within three to four working days..
                              </p>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                      <table
                        align="center"
                        width="100%"
                        border="0"
                        cellpadding="0"
                        cellspacing="0"
                        role="presentation"
                        style="padding:20px;padding-top:0"
                      >
                        <tbody style="width:100%">
                          <tr style="width:100%">
                            <td
                              colspan="2"
                              data-id="__react-email-column"
                              style="display:flex;justify-content:center;width:100%"
                            >
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </td>
                  </tr>
                </tbody>
              </table>
            </td>
          </tr>
        </tbody>
      </table>
      <!--/$-->
    </body>
  </html>
  
  `;

  return status === 'CONFIRM' ? AcceptedTemplate : CancelledTemplate;
}
