import Image from "next/image";

interface Props{
    imageUrl: string;
    title: string;
    content: string;
}

function StoryCard({imageUrl,title,content}:Props){
    return (
      <div className="flex flex-col gap-2 w-[75%] sm:w-[270px] sm:mx-6 border-2 ">
        <Image
          className="w-[100%] object-fit"
          src={imageUrl}
          alt="card-image"
          width={64}
          height={64}
        />

        <div className="mx-3 my-2">
          <h2 className="text-[16px] font-bold">{title}</h2>
          <p className="text-[14px] mt-2">{content}
          </p>
        </div>
      </div>
    );
}

export default StoryCard;