import Layout from "@/components/Layout";

export default function Resources() {
  return (
    <Layout>
      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="max-w-2xl mx-auto">
            <div className="text-6xl mb-6">🔗</div>
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              Resources Page
            </h1>
            <p className="text-lg text-gray-600 mb-8">
              This page is ready to be customized! Continue prompting to add
              study materials, external links, recommended books, videos, and
              other resources.
            </p>
            <div className="inline-block bg-green-50 border-2 border-accent-green rounded-lg px-6 py-3">
              <p className="text-accent-green font-semibold">
                → Prompt the assistant to add your custom content here
              </p>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
