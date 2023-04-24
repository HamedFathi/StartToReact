function Home() {
  return (
    <article className="max-w-2xl px-6 py-24 mx-auto space-y-12 dark:bg-gray-800 dark:text-gray-50">
      <div className="w-full mx-auto space-y-4 text-center">
        <p
          className="text-xs font-semibold tracking-wider uppercase"
          data-testid="title"
        >
          #TailwindCSS
        </p>
        <h1 className="text-4xl font-bold leading-tight md:text-5xl">
          What does the Lorem Ipsum text mean?
        </h1>
      </div>
      <div className="dark:text-gray-100">
        <p>Insert the actual text content here...</p>
      </div>
      <div className="pt-12 border-t dark:border-gray-700">
        <div className="flex flex-col space-y-4 md:space-y-0 md:space-x-6 md:flex-row">
          <img
            src="https://source.unsplash.com/75x75/?flower"
            alt=""
            className="self-center flex-shrink-0 w-24 h-24 border rounded-full md:justify-self-start dark:bg-gray-500 dark:border-gray-700"
          />
          <div className="flex flex-col">
            <h4 className="text-lg font-semibold uppercase">SOMEONE</h4>
            <p className="dark:text-gray-400">
              Lorem Ipsum comes from a latin text written in 45BC by Roman
              statesman, lawyer, scholar, and philosopher, Marcus Tullius
              Cicero. The text is titled &quot;de Finibus Bonorum et
              Malorum&quot; which means &quot;The Extremes of Good and
              Evil&quot;.
            </p>
          </div>
        </div>
      </div>
    </article>
  );
}

export default Home;
