import { MagnifyingGlass } from 'react-loader-spinner';
import { Pending } from './Loader.styled';

export default function Loader() {
  return (
    <Pending>
      <h1>Searching</h1>
      <MagnifyingGlass
        visible={true}
        height="80"
        width="80"
        ariaLabel="MagnifyingGlass-loading"
        wrapperStyle={{}}
        wrapperClass="MagnifyingGlass-wrapper"
        glassColor="#c0efff"
        color="#e15b64"
      />
    </Pending>
  );
}
