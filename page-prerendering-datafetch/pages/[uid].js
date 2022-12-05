export default function UserIdPage(props) {
  return <h1>{props.id}</h1>
}

export async function getServerSideProps(context) {
  console.log('server side running')
  const { params } = context
  const userId = params.uid
  return {
    props: {
      id: 'userid' + userId,
    },
  }
}
