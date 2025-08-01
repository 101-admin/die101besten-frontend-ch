// import { POST_QUERYResult } from '@/sanity/types';
// import { urlFor } from '@/sanity/lib/image';
import Image from "next/image";

type AuthorProps = {
  author: any;
};

export function Author({ author }: AuthorProps) {
  return author?.image || author?.name ? (
    <div className="flex items-center gap-2">
      {author?.image ? (
        <Image
          src={author.image.asset.url}
          width={80}
          height={80}
          alt={author.name || ""}
          className="bg-pink-50 size-10 shadow-inner rounded-full"
        />
      ) : null}
      {author?.name ? (
        <p className="text-base text-slate-700">{author.name}</p>
      ) : null}
    </div>
  ) : null;
}
