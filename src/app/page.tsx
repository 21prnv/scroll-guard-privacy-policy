// pages/index.js
import Head from "next/head";

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-100">
      <Head>
        <title>Privacy Policy</title>
        <meta name="description" content="Privacy Policy for our app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold mb-8 text-black">Privacy Policy</h1>
        <div className="prose prose-lg max-w-none">
          <h2>Important: Accessibility Service Usage</h2>
          <p>
            This app uses Android's Accessibility Service to help you manage
            your screen time and reduce scroll addiction. Here's what you need
            to know:
          </p>
          <ul>
            <li>
              <strong>Purpose:</strong> We use the Accessibility Service to
              monitor your interaction with video reels and help prevent
              excessive scrolling.
            </li>
            <li>
              <strong>How it works:</strong> The app detects when you're viewing
              reels and may intervene to limit scrolling after a certain
              duration.
            </li>
            <li>
              <strong>Permissions:</strong> We require Accessibility Service
              permissions to function. You can enable or disable this at any
              time in your device settings.
            </li>
            <li>
              <strong>Data usage:</strong> We do not collect, store, or transmit
              any personal data through this service.
            </li>
            <li>
              <strong>Limitations:</strong> This app does not change any system
              settings or interfere with other apps' functionality.
            </li>
          </ul>

          <h2>Children's Privacy</h2>
          <p>
            These Services do not address anyone under the age of 13. We do not
            knowingly collect personally identifiable information from children
            under 13 years of age. In the case we discover that a child under 13
            has provided us with personal information, we immediately delete
            this from our servers. If you are a parent or guardian and you are
            aware that your child has provided us with personal information,
            please contact us so that we will be able to do the necessary
            actions.
          </p>
          <h2 className="text-2xl font-semibold mt-8 mb-4">Contact Us</h2>
          <p>
            If you have any questions or suggestions about our Privacy Policy,
            do not hesitate to contact us at:
          </p>
          <p className="font-semibold">
            Email:{" "}
            <a
              href="mailto:pranavpatil6251@gmail.com"
              className="text-blue-600 hover:underline"
            >
              pranavpatil6251@gmail.com
            </a>
          </p>
        </div>
      </main>
    </div>
  );
}
