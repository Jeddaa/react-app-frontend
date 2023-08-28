import React, {useEffect} from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { fetchGreetings } from '../redux/greetingSlice';

const Greetings = () => {
  const {greeting, isLoading, isError} = useSelector((store) => store.greeting);
  const dispatch = useDispatch();


  useEffect(() => {
    dispatch(fetchGreetings());
  }, [dispatch]);


  return (
    <div>
      {isLoading && <p>Loading...</p>}
      {isError && <p>{isError}</p>}
      <h1>Random greetings</h1>
      <p>{greeting.greeting}</p>
    </div>
  )
}

export default Greetings;
