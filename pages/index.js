import Head from "next/head";
import Image from "next/image";
import {ChevronLeftIcon, ChevronRightIcon} from '@heroicons/react/outline'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Slider Page</title>
        <meta name="slider" content="" />
      </Head>
      <div className="flex mt-5 text-lg justify-center  lg:mt-20 lg:text-4xl font-medium">
        <h1 className="text-red-400 mr-4 ">/</h1>
        <h1 className="text-center text-gray-700">Reviews</h1>
      </div>
      <div className="flex justify-center mt-16 ">
        <ChevronLeftIcon className="h-8 cursor-pointer bg-gray-600 rounded-md mr-3 self-center mt-16" />
        <div className="flex flex-col justify-center items-center">
          <Image
            src="https://res.cloudinary.com/diqqf3eq2/image/upload/v1595959131/person-2_ipcjws.jpg"
            alt="pic"
            width={150}
            height={150}
            layout="fixed"
            className="border-solid object-cover  rounded-full  border-8 border-gray-800"
          />

          <h1 className="text-center mt-5">Marie Ferguson</h1>
          <h4 className="text-center ">Office Manager</h4>
          <p className="text-center mt-5">
            Fingerstache umami squid, kinfolk subway tile selvage tumblr man
            braid viral kombucha gentrify
          </p>
          <p className="text-center mt-3">
            fanny pack raclette pok pok mustache.
          </p>
        </div>
        <ChevronRightIcon className="h-8 cursor-pointer bg-gray-600 rounded-md ml-3 self-center mt-16" />
      </div>
    </div>
  );
}
