import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request) {
  try {
    // Parse the request body
    const { email } = await request.json();

    if (!email) {
      return NextResponse.json({ error: 'Email is required' }, { status: 400 });
    }

    // Set up Nodemailer transporter
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.NEXT_PUBLIC_GMAIL_USER,
        pass: process.env.NEXT_PUBLIC_GMAIL_PASS,
      },
    });

    // Email content
    const mailOptions = {
        from: process.env.GMAIL_USER,
        to: email,
        subject: 'Welcome to Atmosoft!',
        html: `
          <div style="font-family: Arial, sans-serif; background-color: #0f1d38; color: white; max-width: 600px; margin: auto; border-radius: 15px; overflow: hidden; box-shadow: 0 4px 20px rgba(0, 0, 0, 0.3);">
            <div style="background-image: url('https://th.bing.com/th/id/OIP.TMDM7p_AWBLGdgAE4hEokAHaFa?rs=1&pid=ImgDetMain'); background-size: cover; padding: 30px; text-align: center; border-bottom: 5px solid #3498db;">
              <img src="https://cdni.iconscout.com/illustration/premium/thumb/man-exploring-space-through-telescope-5982677-4972896.png" alt="Atmosoft Logo" style="width: 120px; margin-bottom: 20px;">
              <h1 style="font-size: 36px; margin: 0; color: #f9f9f9;">Welcome to <span style="color: #1abc9c;">Atmosoft</span></h1>
              <p style="font-size: 18px; color: #f9f9f9;">Bringing you the next-gen software experiences!</p>
            </div>
            <div style="padding: 20px; background-color: #16243b;">
              <p style="font-size: 16px; line-height: 1.6; color: #ffffff;">
                Hey there! We're excited to have you with us. At Atmosoft, we create cutting-edge software that pushes the boundaries of technology, giving you an experience like no other.
              </p>
              <p style="font-size: 16px; line-height: 1.6; color: #ffffff;">
                Here’s a sneak peek at what’s in store for you:
              </p>
              <ul style="color: #ffffff; padding-left: 20px;">
                <li style="margin-bottom: 10px;">🌌 Galaxy-level innovations in software.</li>
                <li style="margin-bottom: 10px;">💻 Next-gen tools for productivity and creativity.</li>
                <li style="margin-bottom: 10px;">🚀 Seamless integrations and intuitive user experiences.</li>
              </ul>
              <div style="text-align: center; margin: 30px 0;">
                <a href="https://wrax.netlify.app" style="display: inline-block; padding: 12px 30px; background-color: #1abc9c; color: white; text-decoration: none; font-size: 18px; border-radius: 25px;">Explore Atmosoft</a>
              </div>
              <p style="font-size: 14px; color: #bdc3c7; text-align: center;">If you didn’t subscribe to this list, you can <a href="https://wrax.netlify.app/Unsubscribe" style="color: #3498db;">unsubscribe here</a>.</p>
            </div>
            <div style="background-color: #0e1a33; padding: 15px; text-align: center;">
              <p style="font-size: 12px; color: #95a5a6; margin: 0;">© 2024 Atmosoft, All rights reserved.</p>
            </div>
          </div>
        `,
      };
      

    // Send email
    await transporter.sendMail(mailOptions);

    return NextResponse.json({ message: 'Subscription successful!' }, { status: 200 });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: 'Error sending email' }, { status: 500 });
  }
}
