import { Menu } from '@headlessui/react'
import { FaUserLarge } from 'react-icons/fa6'
function UserDropdown() {
  return (
    <Menu>
      <Menu.Button>
      <span className="border rounded-full p-3 text-zomato-400 border-gray-400"><FaUserLarge /></span>

      </Menu.Button>
      <Menu.Items>
        <Menu.Item>
          
            <button>
              Signin
            </button>
        </Menu.Item>
        <Menu.Item>
          
          <button>
            SignUp
          </button>
      </Menu.Item>
        
       
      </Menu.Items>
    </Menu>
  )
}

export default UserDropdown