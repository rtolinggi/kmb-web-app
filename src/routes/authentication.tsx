import { supabase } from '../services/supabaseClient';
import { Auth, ThemeSupa } from '@supabase/auth-ui-react';

const customTheme = {
  default: {
    colors: {
      brand: 'hsl(153 60.0% 53.0%)',
      brandAccent: 'hsl(154 54.8% 45.1%)',
      brandButtonText: 'white',
      // ..
    },
    dark: {
      colors: {
        brandButtonText: 'white',
        defaultButtonBackground: '#2e2e2e',
        defaultButtonBackgroundHover: '#3e3e3e',
        //..
      },
    },
    // You can also add more theme variations with different names.
    evenDarker: {
      colors: {
        brandButtonText: 'white',
        defaultButtonBackground: '#1e1e1e',
        defaultButtonBackgroundHover: '#2e2e2e',
        //..
      },
    },
  },
};

export default function Authentication() {
  return (
    <div className='flex justify-center items-center w-full min-h-screen bg-body/10'>
      <div className='w-1/5 bg-white mx-auto rounded-md shadow-lg px-4'>
        <Auth
          supabaseClient={supabase}
          appearance={{ theme: ThemeSupa }}
          theme='dark'
          redirectTo='/'
        />
      </div>
    </div>
  );
}
