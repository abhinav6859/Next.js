// app/user/[id]/page.tsx
type Props = {
  params: {
    id: string;
  };
};

export default async function UserPage({ params }: Props) {
     const { id } = await params; 
  return <h1>User ID: {id}</h1>;
}
