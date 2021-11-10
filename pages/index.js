import Head from "next/head";
import Image from "next/image";

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
      <div className="flex justify-center mt-16">
        <Image
          src="https://res.cloudinary.com/diqqf3eq2/image/upload/v1595959131/person-2_ipcjws.jpg"
          alt="pic"
          width={150}
          height={150}
          layout="fixed"
          className="rounded-full border-solid border-8 border-gray-800"
        />
      </div>
    </div>
  );
}
