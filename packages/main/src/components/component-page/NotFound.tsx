export default function Home() {
  return (
    <div className='flex flex-col items-center justify-center h-full py-20 text-center text-muted-foreground'>
      <h2 className='text-2xl font-semibold mb-2'>Select a component</h2>
      <p className='max-w-md'>
        Choose a UI library above and a component from the sidebar to preview
        its implementation and usage here.
      </p>
    </div>
  )
}
