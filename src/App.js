
function Food({name, pic}) {
  return (
    <div>
      <h1>{name}</h1>
      <img src={pic}  alt=""/>
    </div>
  );
}

const foodILike = [
  {
    id: 1,
    name: 'Kimchi',
    image: 'https://img2.daumcdn.net/thumb/R658x0.q70/?fname=https://t1.daumcdn.net/news/202105/25/babshim/20210525042622147ztkc.jpg',
    rating: 3.2,
  },
  {
    id: 2,
    name: '삼겹살',
    image: 'https://img2.daumcdn.net/thumb/R658x0.q70/?fname=https://t1.daumcdn.net/news/202105/25/babshim/20210525042622147ztkc.jpg',
    rating: 2.2,
  },
  {
    id: 3,
    name: '오뎅',
    image: 'https://img2.daumcdn.net/thumb/R658x0.q70/?fname=https://t1.daumcdn.net/news/202105/25/babshim/20210525042622147ztkc.jpg',
    rating: 4,
  },
  {
    id: 4,
    name: '감자',
    image: 'https://img2.daumcdn.net/thumb/R658x0.q70/?fname=https://t1.daumcdn.net/news/202105/25/babshim/20210525042622147ztkc.jpg',
    rating: 5,
  },
  {
    id: 5,
    name: '순대',
    image: 'https://img2.daumcdn.net/thumb/R658x0.q70/?fname=https://t1.daumcdn.net/news/202105/25/babshim/20210525042622147ztkc.jpg',
    rating: 4,
  },
]

function App() {
  return ( 
    <div>
       {foodILike.map(dish => {
         return <Food name={dish.name} pic={dish.image} />
       })}
   
    </div> 
  );
}

export default App;
