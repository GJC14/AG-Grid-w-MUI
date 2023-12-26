import { IconButton } from '@mui/material'
import GitHubIcon from '@mui/icons-material/GitHub';

function Footer() {
  return <footer>
    <p>Please refer to <a href="https://www.ag-grid.com/react-data-grid/getting-started">AG-Grid DOCS</a> and <a href="https://www.youtube.com/@Codevolution">Codevolution</a> Youtube Channel</p>
    <p>Source code available on
      <IconButton size='small' aria-label='GitHub'>
        <GitHubIcon href="https://github.com/GJC14/AG-Grid-w-MUI/tree/main" />
      </IconButton>
    </p>
    <p>&copy; {new Date().getFullYear()} Gabriel J. Chiu @ Taipei | Maide in Taiwan with MIT License</p>
    </footer>
}

export default Footer