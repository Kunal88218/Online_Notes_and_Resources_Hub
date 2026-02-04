import Layout from "@/components/Layout";

export default function About() {
  return (
    <Layout>
      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="max-w-2xl mx-auto">
            <div className="text-6xl mb-6">ℹ️</div>
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              About Page
            </h1>
            <p className="text-lg text-gray-600 mb-8">
              This page is ready to be customized! Continue prompting to add information about the platform, team, mission, values, and more details about your academic resource hub.
            </p>
            <div className="inline-block bg-blue-50 border-2 border-accent-blue rounded-lg px-6 py-3">
              <p className="text-accent-blue font-semibold">
                → Prompt the assistant to add your custom content here
              </p>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
