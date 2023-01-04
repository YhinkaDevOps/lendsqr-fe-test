import { Dropdown } from 'antd'
import { Link, useNavigate } from 'react-router-dom'
import { AvatarSM, Bell, Logo } from 'components/contants/assets'
import { useSidebarContext } from 'context/sidebar'

const Navigation = () => {
  const navigate = useNavigate()
  const { setShowSidebar } = useSidebarContext()

  return (
    <header className="navigation">
      <nav className="navigation__mobile">
        <button onClick={() => setShowSidebar(true)}>
          <i className="fa fa-bars fa-lg" aria-hidden="true"></i>
        </button>
      </nav>

      <div className="navigation__logo">
        <Link to="/dashboard">
          <img src={Logo} alt="Lendsqr Logo" />
        </Link>
      </div>

      <div className="navigation__search">
        <input type="search" name="search" placeholder="Search for anything" />
        <button>
          <i className="fa fa-search" aria-hidden="true"></i>
        </button>
      </div>

      <div className="navigation__right">
        <div className="navigation__right--link">
          <Link to="#">Docs</Link>
        </div>
        <div
          style={{
            display: 'flex',
            alignItems: 'center'
          }}
        >
          <div className="navigation__right--bell">
            <button>
              <img src={Bell} alt="Notification" />
              <div className="navigation__right--bell__badge" />
            </button>
          </div>
        </div>
        <Dropdown
          trigger={['click']}
          className="navigation__dropdown"
          overlay={
            <>
              <div className="navigation__dropdown__menu">
                <button
                  className="navigation__dropdown__item"
                  key="logoff"
                  onClick={() => navigate('/login')}
                >
                  <i className="fas fa-sign-out-alt" />
                  <span
                    style={{
                      marginLeft: '5px', fontWeight:'500'
                    }}
                  >
                    Log Out
                  </span>
                </button>
              </div>
            </>
          }
        >
          <div className="navigation__profile">
            <img src={AvatarSM} className="navigation__avatar" alt="Avatar" />
            <h5 className="navigation__username">Adedeji</h5>
            <button className="navigation__profile__button">
              <i className="fa fa-caret-down" aria-hidden="true" />
            </button>
          </div>
        </Dropdown>
      </div>
    </header>
  )
}

export default Navigation
