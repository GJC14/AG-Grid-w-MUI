import { Typography } from '@mui/material'

export const MuiTypography = () => {
  return (
    <div>
      <Typography variant='h1' gutterBottom>h1 Heading</Typography>
      <Typography variant='h2' gutterBottom>h2 Heading</Typography>
      <Typography variant='h3' gutterBottom>h3 Heading</Typography>
      <Typography variant='h4' gutterBottom component='h1'>
        h4 Heading
      </Typography>
      <Typography variant='h5'>h5 Heading</Typography>
      <Typography variant='h6'>h6 Heading</Typography>
      <Typography variant='subtitle1'>subtitle1</Typography>
      <Typography variant='subtitle2'>subtitle2</Typography>
      <Typography>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nam saepe
        magnam illo quas illum minus, aperiam, iusto optio quisquam veniam
        obcaecati quasi libero aspernatur alias quia modi minima excepturi ad.
      </Typography>
      <Typography variant='body2'>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum, harum
        quam deserunt optio atque illo iste! Qui ullam ut nisi. Porro adipisci
        eius nesciunt excepturi id! Eius nemo asperiores natus?
      </Typography>
    </div>
  )
}