import { useNavigate } from 'react-router-dom';
import NotFoundSvg from '../../assets/notFound.svg';
import Button from '../../components/button';

export default function NotFound() {
  const navigate = useNavigate();
  return (
    <div className='bg-gradient-to-r from-primary-light to-neon px-4'>
      <div className='lg:w-7/12 py-8 m-auto min-h-screen flex items-center justify-center'>
        <div className='lg:flex bg-white shadow-lg overflow-hidden rounded-md justify-center items-center pb-8 px-8'>
          <div className='text-center pt-8'>
            <h1 className='text-9xl font-bold text-primary-light'>404</h1>
            <h1 className='text-5xl font-medium py-8'>
              oops! Halaman Tidak di Temukan
            </h1>
            <Button onClick={() => navigate('/')}>Kembali</Button>
          </div>
          <div>
            <img src={NotFoundSvg} alt='Not Found' />
          </div>
        </div>
      </div>
    </div>
  );
}
