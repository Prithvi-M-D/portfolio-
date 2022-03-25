import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import BottomNavigation from '@mui/material/BottomNavigation';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import InstagramIcon from '@mui/icons-material/Instagram';

const BottomNav = () => {
  return (
    <BottomNavigation>
      <BottomNavigationAction label="linkedin" icon={<LinkedInIcon />} target="_blank" href="https://www.linkedin.com/in/prithvimd/"/>
      <BottomNavigationAction label="github" icon={<GitHubIcon />} target="_blank" href="https://github.com/Prithvi-M-D"/>
      <BottomNavigationAction label="instagram" icon={<InstagramIcon />} target="_blank" href="https://www.instagram.com/pruthvi._.dayan/"/>
    </BottomNavigation>
  );
}

export default BottomNav;
