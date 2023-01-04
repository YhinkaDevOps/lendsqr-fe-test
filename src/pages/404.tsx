import { Button, Result } from 'antd'
import AppLayout from 'components/Layout/Layout'
import { Link } from 'react-router-dom'
const NotFound = () => {
  return (
    <AppLayout>
      <Result
        status="404"
        title="404"
        subTitle="Sorry, the page you visited does not exist."
        extra={
          <Link to="/dashboard">
            <Button type="primary">Back to Dashboard</Button>
          </Link>
        }
      />
    </AppLayout>
  )
}

export default NotFound
