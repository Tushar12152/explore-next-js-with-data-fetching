
const HomePage = ({params}) => {
  console.log(params?.id)

  
  return (
    <div>
        <h1 className="text-4xl font-bold">welcome to data fetching</h1>
    </div>
  );
};

export default HomePage;