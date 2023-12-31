
const MainWrapper = ({ children }) => {
  return (
    <main className="w-full max-w-5xl p-10 bg-gray-900 mx-auto rounded-xl">
      { children }
    </main>
  )
}

export default MainWrapper