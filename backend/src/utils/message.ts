export const generateMessage = (token: string) => {
    return `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Reset Your Password</title>
</head>
<body style="font-family: 'Segoe UI', Arial, sans-serif; line-height: 1.6; color: #14171A; background-color: #F5F8FA; margin: 0; padding: 20px;">
    <table width="100%" cellpadding="0" cellspacing="0" style="max-width: 600px; margin: 0 auto; background: #FFFFFF; border: 1px solid #E1E8ED; border-radius: 16px; overflow: hidden;">
        <tr>
            <td style="text-align: center; padding: 30px 20px; background: #1DA1F2; color: white;">
                <table align="center" cellpadding="0" cellspacing="0">
                    <tr>
                        <td style="width: 60px; height: 60px; background: white; text-align: center; vertical-align: middle; border-radius: 50%;">
                            <img src="https://i.postimg.cc/7Z2zN601/unlock.png" alt="Password reset icon" style="width: 40px; height: 40px; display: inline-block;">
                        </td>
                    </tr>
                </table>
                <h2 style="color: white; font-size: 24px; margin: 15px 0 20px; font-weight: 700;">Reset Your Password</h2>
            </td>
        </tr>
        <tr>
            <td style="padding: 40px 30px; background-color: #FFFFFF;">
                <p style="color: #657786; margin: 0 0 15px;">Hello,</p>
                <p style="color: #657786; margin: 0 0 5px;">
                    We've received a request to reset your account password. If you initiated this request, please use the verification code below to proceed with creating a new password
                </p>
                <table width="100%" cellpadding="0" cellspacing="0" style="background: #E8F5FD; border: 1px solid #1DA1F2; text-align: center;">
                    <tr>
                        <td style="height: 40px;"></td> <!-- Spacer for top padding -->
                    </tr>
                    <tr>
                        <td style="padding: 0 25px;">
                            <table width="100%" cellpadding="0" cellspacing="0" style="background: #FFFFFF; border-radius: 12px;">
                                <tr>
                                    <td style="font-size: 36px; font-weight: 800; letter-spacing: 8px; color: #1DA1F2; padding: 15px;">
                                        ${token}
                                    </td>
                                </tr>
                            </table>
                        </td>
                    </tr>
                    <tr>
                        <td style="color: gray; font-size: 14px; padding: 15px 25px;">
                            This code will expire in 15 minutes for your security.
                        </td>
                    </tr>
                    <tr>
                        <td style="height: 40px;"></td> <!-- Spacer for bottom padding -->
                    </tr>
                </table>
                <table width="100%" cellpadding="0" cellspacing="0">
                    <tr>
                        <td style="height: 40px;"></td> <!-- Spacer for margin-bottom -->
                    </tr>
                </table>
                <p style="text-align: center; color: #1DA1F2; margin: 10px 0 0; font-weight: bold;">
                    Security Note:
                </p>
                <p style="color: #9a9a9b; font-size: 14px; margin: 0; text-align: center;">
                    If you did not request a password reset, no action is required. Your account remains secure, and this code will expire automatically.
                </p>
            </td>
        </tr>
    </table>
</body>
</html>`
};