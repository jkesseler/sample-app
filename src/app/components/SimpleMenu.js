/**
  TODO: Refactor the menu
  Maybe get routerConfig from state?
*/
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import Menu from '@material-ui/core/Menu';
import IconButton from '@material-ui/core/IconButton';
import MenuItem from '@material-ui/core/MenuItem';
import MenuIcon from '@material-ui/icons/Menu';


export class SimpleMenu extends Component {
  constructor(props) {
    super(props);
    this.state = { isOpen: false };
  }

  handleToggleMenu = () => {
    const { isOpen } = this.state;
    this.setState({ isOpen: !isOpen });
  };

  handleCloseMenu = () => {
    this.setState({ isOpen: false });
  };

  render() {
    const { menuItems } = this.props;
    const { isOpen } = this.state;

    return (
      <>
        <IconButton
          color="inherit"
          aria-label="Menu"
          onClick={this.handleToggleMenu}
        >
          <MenuIcon />
        </IconButton>
        <Menu
          id="simple-menu"
          open={isOpen}
          onClose={this.handleCloseMenu}
          style={{ marginTop: 16 }}
        >
          {menuItems.map(item => (
            <Link to={item.path} key={item.path} style={{ textDecoration: 'none', display: 'block' }}>
              <MenuItem>
                {item.title}
              </MenuItem>
            </Link>
          ))}
        </Menu>
      </>
    );
  }
}

SimpleMenu.propTypes = {
  menuItems: PropTypes.arrayOf(
    PropTypes.shape({
      path: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
    }),
  ).isRequired,
};

export default SimpleMenu;
