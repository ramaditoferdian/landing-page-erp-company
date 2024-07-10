import Image from "next/image";

const About = () => {
  return (
    <section
      id="about"
      className="h-full md:h-[110vh] pt-[180px] pb-24 flex flex-col items-center justify-center gap-12 gap-y-16 bg-[#673DE5]"
    >
      <h2 className="text-4xl font-bold text-white">About Us</h2>
      <div className="flex flex-col md:flex-row gap-x-4 gap-y-8 w-full h-full container">
        <div className="w-full md:w-1/2 flex flex-col gap-y-4">
          <h3 className="text-2xl font-semibold text-white">
            Empowering Entrepreneurs with EasyERP
          </h3>
          <p className="text-white">
            EasyERP berkomitmen untuk membantu pengusaha mencapai kesuksesan
            bisnis dengan mudah. Dengan teknologi ERP kami yang canggih dan
            user-friendly, pencatatan transaksi dan analisis keuntungan menjadi
            lebih efisien dan efektif.
          </p>
        </div>
        <div className="h-full w-full md:w-1/2 flex justify-center">
          <Image
            src={"/assets/about-1.svg"}
            alt="about-1"
            width={500}
            height={500}
            className="w-auto h-full min-h-[300px] md:max-h-[300px] object-cover"
          />
        </div>
      </div>
      <div className="flex flex-col-reverse md:flex-row gap-x-4 gap-y-8 w-full container">
        <div className="h-full w-full md:w-1/2 flex justify-center">
          <Image
            src={"/assets/about-2.svg"}
            alt="about-2"
            width={500}
            height={500}
            className="w-auto h-full min-h-[300px] md:max-h-[300px] object-cover"
          />
        </div>
        <div className="w-full md:w-1/2 flex flex-col gap-y-4">
          <h3 className="text-2xl font-semibold text-white">Our Mission</h3>
          <p className="text-white">
            Kami bertujuan untuk memberdayakan pengusaha dari berbagai latar
            belakang dengan alat yang tepat untuk mengelola bisnis mereka dengan
            lebih baik.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
