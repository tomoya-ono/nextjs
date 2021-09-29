import Link from "next/link";

export const getStaticProps = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  const data = await res.json();
  return {
    props: { users: data },
  };
};

export default function Index({ users }) {

return (
    <div>
      <h1>All Ninjas</h1>
      {users.map(user => (
        <Link href={`/blog/${user.id}`} key={user.id}>
          <a>
            <h3>{ user.name }</h3>
          </a>
        </Link>
      ))}
    </div>
  );
}
