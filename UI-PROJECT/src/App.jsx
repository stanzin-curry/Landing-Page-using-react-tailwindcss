import Section1 from './COMPONENTS/section-1/Section1'
import Section2 from './COMPONENTS/section-2/Section2'


const App = () => {

  const users = [
    {
      img: 'https://images.unsplash.com/photo-1554272522-d01f7831027c?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8ODV8fGxhZGFraCUyMGhvdXNlfGVufDB8fDB8fHww&auto=format&fit=crop&q=60&w=900',
      intro: '',
      color:'royalblue',
      tag: 'Satisfied'
    },
    {
      img: 'https://images.unsplash.com/photo-1686851206775-6e5a8348a977?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTIxfHxsYWRha2glMjBob3VzZXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&q=60&w=900',
      color:'lightseagreen',
      intro: '',
      tag: 'Underserved'
    },
    {
      img: 'https://images.unsplash.com/photo-1608318674977-5ee226978ff8?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTUzfHxsYWRha2glMjBob3VzZXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&q=60&w=900',
      color:'orange',
      intro: '',
      tag: 'Underbanked'
    },
    {
      img: 'https://images.unsplash.com/photo-1688002105973-387fc64ac50b?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTcyfHxsYWRha2glMjBob3VzZXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&q=60&w=900',
      color:'pink',
      intro: '',
      tag: 'Underwear'
    },
    {
      img:'https://images.unsplash.com/photo-1653629315720-7eb369c6c587?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjA0fHxsYWRha2glMjBob3VzZXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&q=60&w=900',
      intro:'',
      color:'black',
      tag:'Average'
    }
  ]
  return (
    <div>
      <Section1 users={users} />
      <Section2 />
    </div>
  )
}

export default App