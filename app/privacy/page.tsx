export default function HomePage() {
  return (
    <main className="mx-auto max-w-3xl px-6 py-12 text-gray-800">
      <h1 className="mb-6 text-3xl font-bold">
        Privacy Policy for Mail Whisperer
      </h1>
      <p className="text-sm text-gray-500 mb-10">
        Last updated: October 30, 2025
      </p>

      <p className="mb-6">
        Mail Whisperer (“the Extension”) is a Chrome browser extension that
        helps users perform smarter Gmail searches using natural language. This
        Privacy Policy explains what information the Extension accesses, how it
        is used, and how it is protected.
      </p>

      <section className="mb-8">
        <h2 className="mb-3 text-2xl font-semibold">
          1. Information We Collect
        </h2>
        <p className="mb-4">
          Mail Whisperer is designed to operate with minimal data collection. We
          only process information necessary to provide the Extension’s
          functionality.
        </p>

        <h3 className="mb-2 text-xl font-medium">Authentication Data</h3>
        <p className="mb-4">
          The Extension uses a secure, third-party authentication provider to
          handle sign-ins and session management. Your password and credentials
          are never stored or accessed by the Extension; it only receives a
          temporary session token used to verify that you are logged in.
        </p>

        <h3 className="mb-2 text-xl font-medium">User Queries</h3>
        <p className="mb-4">
          When you enter a search request, the text of your query is securely
          sent to our server to generate a Gmail-compatible search string. To
          improve accuracy, your query may also be processed by a trusted
          third-party AI language model service. Only the text of your query is
          transmitted — no personal identifiers, email contents, or account data
          are shared or stored.
        </p>

        <h3 className="mb-2 text-xl font-medium">Gmail Page Interaction</h3>
        <p className="mb-4">
          The Extension includes a content script that runs on Gmail pages (
          <code>https://mail.google.com/*</code>) to display the search
          interface and results. It does <strong>not</strong> read, store, or
          alter your emails. Interaction is limited to enhancing your Gmail
          search experience.
        </p>

        <h3 className="mb-2 text-xl font-medium">Local Storage</h3>
        <p>
          The Extension may store minimal information locally in your browser,
          such as your session token and user preferences. This data stays
          entirely on your device and is never transmitted to external services.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="mb-3 text-2xl font-semibold">
          2. How We Use Information
        </h2>
        <p className="mb-4">Collected information is used solely to:</p>
        <ul className="list-disc list-inside mb-4 space-y-1">
          <li>Authenticate your session securely.</li>
          <li>Convert natural-language queries into Gmail search operators.</li>
          <li>Display the resulting searches within Gmail.</li>
        </ul>
        <p>
          We do <strong>not</strong> sell, rent, or share any personal
          information for advertising or marketing purposes.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="mb-3 text-2xl font-semibold">3. Data Retention</h2>
        <p>
          Mail Whisperer does not permanently store any personal data or email
          content. Query text is processed only as needed to generate a search
          result and is not retained after processing is complete.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="mb-3 text-2xl font-semibold">4. Cookies</h2>
        <p>
          Cookies are used only as part of the secure authentication process.
          These cookies are created and managed by the authentication provider
          and are not read or modified by the Extension.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="mb-3 text-2xl font-semibold">5. Third-Party Services</h2>
        <p className="mb-4">
          Mail Whisperer uses limited, trusted third-party services to operate:
        </p>
        <ul className="list-disc list-inside mb-4 space-y-1">
          <li>
            <strong>Authentication Provider</strong> – For secure sign-in and
            session management.
          </li>
          <li>
            <strong>AI Processing Service</strong> – For interpreting user
            search queries and generating Gmail search strings.
          </li>
        </ul>
        <p>
          All data exchanged with these services is encrypted and transmitted
          over HTTPS. No email content or personally identifiable information is
          ever shared.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="mb-3 text-2xl font-semibold">6. Security</h2>
        <p>
          We follow standard industry practices to protect data transmitted
          between the Extension, authentication service, and backend. All
          communications use secure HTTPS connections, and no sensitive Gmail
          data is collected or stored.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="mb-3 text-2xl font-semibold">7. Your Choices</h2>
        <p className="mb-4">
          You can sign out of the Extension at any time to remove stored session
          data. Uninstalling the Extension will delete all locally stored data
          and tokens from your browser.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="mb-3 text-2xl font-semibold">
          8. Changes to This Policy
        </h2>
        <p>
          We may update this Privacy Policy periodically to reflect improvements
          or legal requirements. The most recent version will always be
          available in the Chrome Web Store listing.
        </p>
      </section>

      <section>
        <h2 className="mb-3 text-2xl font-semibold">9. Contact</h2>
        <p className="mb-2">
          If you have any questions or concerns about this Privacy Policy,
          please contact:
        </p>
        <p>
          <strong>Greg Lawrence</strong>
          <br />
          Developer, Mail Whisperer
          <br />
          📧{" "}
          <a
            href="mailto:your-email@example.com"
            className="text-blue-600 underline"
          >
            greglawrencewebsites@gmail.com
          </a>
        </p>
      </section>
    </main>
  );
}
