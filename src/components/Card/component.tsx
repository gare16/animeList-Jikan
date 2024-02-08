import {
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
  Card,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "../ui/badge";
import Link from "next/link";

export function CardList({ props }: any) {
  return (
    <Card className="shadow-lg w-80 mx-16">
      <img
        alt="Card Image"
        className="w-full h-60 object-cover"
        height="300"
        src={props.images.jpg.image_url}
        style={{
          aspectRatio: "400/300",
          objectFit: "cover",
        }}
        width="400"
      />
      <CardContent className="p-4">
        <CardTitle className="text-2xl font-bold">{props.title}</CardTitle>
        <CardDescription className="text-gray-500 dark:text-gray-400"></CardDescription>

        <div className="flex overflow-clip gap-2 mt-5">
          {props.genres.map((d: any, i: any) => {
            return (
              <Badge key={i} className="bg-red-500">
                {d.name}
              </Badge>
            );
          })}
        </div>
      </CardContent>
      <CardFooter className="flex justify-end p-4">
        <Link href={`anime/${props.mal_id}`}>
          <Button>
            <ArrowRightIcon className="mr-2 h-4 w-4" />
            More
          </Button>
        </Link>
      </CardFooter>
    </Card>
  );
}

function ArrowRightIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M5 12h14" />
      <path d="m12 5 7 7-7 7" />
    </svg>
  );
}
