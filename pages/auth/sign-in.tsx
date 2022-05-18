import { GetServerSideProps, NextPage } from "next"
import { getCsrfToken } from "next-auth/react"
import { Fragment, useRef } from "react"

interface LoginPageProps {
  csrfToken?: string
}

const SignInPage: NextPage<LoginPageProps> = (props) => {
  const formRef = useRef<HTMLFormElement>(null)

  return (
    <Fragment>
      <form ref={formRef} method="POST" action="/api/auth/callback/credentials">
        <input type="hidden" name="csrfToken" defaultValue={props.csrfToken} />

        <input type="text" name="email" />
        <input type="password" name="password" />

        <button type="submit">Sign In</button>
      </form>
    </Fragment>
  )
}

export const getServerSideProps: GetServerSideProps<LoginPageProps> = async (
  context
) => {
  return {
    props: {
      csrfToken: await getCsrfToken(context),
    },
  }
}

export default SignInPage
