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

  handleToggleMenu = (event) => {
    const { isOpen } = this.state;
    this.setState({
      anchorEl: event.currentTarget,
      isOpen: !isOpen,
    });
  };

  render() {
    const { menuItems } = this.props;
    const { anchorEl, isOpen } = this.state;

    return (
      <>
        <IconButton
          aria-owns={anchorEl ? 'simple-menu' : undefined}
          aria-haspopup="true"
          aria-label="Menu"
          color="inherit"
          onClick={this.handleToggleMenu}
        >
          <MenuIcon />
        </IconButton>
        <Menu
          id="simple-menu"
          anchorEl={anchorEl}
          open={isOpen}
          onClose={this.handleToggleMenu}
          style={{ marginTop: 16 }}
        >
          {menuItems.map(item => (
            <Link to={item.path} key={item.path} style={{ textDecoration: 'none', display: 'block' }}>
              <MenuItem onClick={this.handleToggleMenu}>
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
