import React, { useState } from 'react';
import {
  MDBContainer,
  MDBNavbar,
  MDBNavbarBrand,
  MDBNavbarToggler,
  MDBIcon,
  MDBNavbarNav,
  MDBNavbarItem,
  MDBNavbarLink,
  MDBBtn,
  MDBDropdown,
  MDBDropdownToggle,
  MDBDropdownMenu,
  MDBDropdownItem,
  MDBCollapse,
} from 'mdb-react-ui-kit';
import logo from '../../Images/logo.png'
import styles from'./Header.module.css'


export default function Header() {
  const [showBasic, setShowBasic] = useState(false);

  return (
    <MDBNavbar expand='lg' light className={styles.headerbg}>
      <MDBContainer fluid>
        <MDBNavbarBrand href='#'>
          <img src={logo} width={40}/>
           </MDBNavbarBrand>

        <MDBNavbarToggler
          aria-controls='navbarSupportedContent'
          aria-expanded='false'
          aria-label='Toggle navigation'
          onClick={() => setShowBasic(!showBasic)}
        >
          <MDBIcon icon='bars' fas />
        </MDBNavbarToggler>

        <MDBCollapse navbar show={showBasic}>
          <MDBNavbarNav className='mr-auto mb-2 mb-lg-0'>
            <MDBNavbarItem >
              <MDBNavbarLink  href='#' className={styles.menucolor}>
                Home
              </MDBNavbarLink>
            </MDBNavbarItem>
            <MDBNavbarItem>
              <MDBNavbarLink href='#' className={styles.menucolor}>Products</MDBNavbarLink>
            </MDBNavbarItem>

            <MDBNavbarItem>
              <MDBDropdown>
                <MDBDropdownToggle tag='a' className='nav-link ' role='button'>
                 <span className={styles.menucolor}> Categories</span>
                </MDBDropdownToggle>
                <MDBDropdownMenu>
                  <MDBDropdownItem link>Clothes</MDBDropdownItem>
                  <MDBDropdownItem link>Shoes</MDBDropdownItem>
                  <MDBDropdownItem link>Electronics</MDBDropdownItem>
                </MDBDropdownMenu>
              </MDBDropdown>
            </MDBNavbarItem>

            <MDBNavbarItem>
              <MDBNavbarLink href='#' className={styles.menucolor}>About</MDBNavbarLink>
            </MDBNavbarItem>

            <MDBNavbarItem>
              <MDBNavbarLink href='#' className={styles.menucolor}>Contact</MDBNavbarLink>
            </MDBNavbarItem>
          </MDBNavbarNav>
          
          <form className='d-flex input-group w-50 full'>
            <input type='search' className='form-control' placeholder='Search Products' aria-label='Search' />
            <MDBBtn className='btn-bg ms-2 ctrl '>Search</MDBBtn>
          </form>
          
        </MDBCollapse>
      </MDBContainer>
    </MDBNavbar>
  );
}