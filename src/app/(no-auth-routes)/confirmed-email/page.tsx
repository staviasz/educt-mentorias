import ConfirmedEmailComponent from '@/components/infos/confirmed-email';
import GridTwoLayout from '@/layout/grid-two';
import LogoContentAndSpan from '@/layout/logo-content-and-span';
import womanWorking from '@public/images/woman-working-her-laptop-ultrawide.svg';
import Image from 'next/image';

export default function ConfirmedEmail() {
  return (
    <GridTwoLayout
      columnOne={{
        className: 'w-[70%]',
        children: (
          <LogoContentAndSpan
            textSpan="Ao criar sua conta, você concorda com nossos termos de Serviço 
e política de privacidade."
          >
            <ConfirmedEmailComponent />
          </LogoContentAndSpan>
        ),
      }}
      columnTwo={{
        className: 'hidden sm:block',
        children: (
          <Image
            className="w-full h-screen object-cover p-2 rounded-3xl"
            src={womanWorking}
            alt="Mulher trabalhando no notebook"
          />
        ),
      }}
    />
  );
}
