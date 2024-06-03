import '../App.css'
import heart from "../img/heart.png"
import profile from "../img/profile.png"
import search from "../img/search.png"
import shopping_cart from "../img/shopping_cart.png"
import { useState } from 'react'
import { Input } from 'antd';
import { DownOutlined } from '@ant-design/icons';
import { Dropdown, Space } from 'antd';

export let overF = ""

const items = [
  {
    label: <a href="https://www.antgroup.com">1st menu item</a>,
    key: '0',
  },
  {
    label: <a href="https://www.aliyun.com">2nd menu item</a>,
    key: '1',
  },
  
];


function ProductsNumber({value}){
  
  return (
    <div className='products__number'>
      {value}
    </div>
  )
}

function NavLink({name}){
  return(
    <a href='' className='nav__link'>{name}</a>
  )
}

function SearchMenu({clName}){
  return (
    <div className={clName}>
      <h1 className="menu__title">Search</h1>
      <form action="" className="searching__form">
        <Input className='search__line' placeholder='Search ...' />
        <img className='search__icon' src="search.png" alt="" />
      </form>
      <div className="search__items">
      <Dropdown menu={{ items }} trigger={['click']} className='items__dropdown'>
      <a onClick={(e) => e.preventDefault()}>
        <Space>
          Bedroom
          <DownOutlined />
        </Space>
      </a>
      </Dropdown>
      <Dropdown menu={{ items }} trigger={['click']} className='items__dropdown'>
      <a onClick={(e) => e.preventDefault()}>
        <Space>
          Bedroom
          <DownOutlined />
        </Space>
      </a>
      </Dropdown>
      <Dropdown menu={{ items }} trigger={['click']} className='items__dropdown'>
      <a onClick={(e) => e.preventDefault()}>
        <Space>
          Bedroom
          <DownOutlined />
        </Space>
      </a>
      </Dropdown>
      <Dropdown menu={{ items }} trigger={['click']} className='items__dropdown'>
      <a onClick={(e) => e.preventDefault()}>
        <Space>
          Bedroom
          <DownOutlined />
        </Space>
      </a>
      </Dropdown>
      </div>
      
    </div>
  )
}

function IconButton({value, isLinked, func}){
    if(isLinked == true){
      return(
        <a href='' className='icon__item'>
          <img className='header__icon' src={value} />
        </a>
      )
    }
    else{
      return(
        <button className='icon__item' onClick={func}>
          <img className='header__icon' src={value} />
        </button>
      )
    }
    
}

export default function Header(){
  const [productsN, setProductsN] = useState(0)
  const [clName, setClName] = useState("search__menu")
  
  return(
    
  <>
  <SearchMenu clName = {clName}/>
  <header className='header'>
    <div className='header__top'>
      <div className='logo'>Moody Studio</div>
      <div className='header__icons'>
        <IconButton func = {() => {
            if(clName == "search__menu"){
              setClName("search__menu active")
              overF = "hidden"
            }
            else{
              setClName("search__menu")
              overF = ""
            }
          }} value={search} isLinked={false}/>
        <IconButton value={profile} isLinked={true}/>
        <div className='shopping'>
          <IconButton value={shopping_cart} isLinked={false}/>
          <ProductsNumber value={productsN}/>
        </div>
        
        <IconButton value={heart} isLinked={true}/>
      </div>
    </div>
    <nav className='nav'>
    <div className='nav__content'>
      <NavLink name="Home"/>
      <NavLink name="Store"/>
      <NavLink name="Accessories"/>
      <NavLink name="Brand"/>
      <NavLink name="Pages"/>
      <NavLink name="About us"/>
      <NavLink name="News"/>
      <NavLink name="Contact us"/>
    </div>
      
    </nav>
  </header>
  
  </>  
  
  )
}
