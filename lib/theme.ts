import { createMuiTheme } from '@material-ui/core'

export const getTheme = (darkMode: boolean) =>
  createMuiTheme({
    palette: {
      type: darkMode ? 'dark' : 'light',
      primary: {
        main: '#3c9f80',
      },
      secondary: {
        main: '#3f51b5',
      },
    },
    overrides: {
      MuiContainer: {
        root: {
          paddingBottom: '10px',
        },
      },
      MuiTableRow: {
        root: {
          height: '45px',
        },
      },
      MuiTableFooter: {
        root: {
          position: 'absolute',
          bottom: 0,
          right: 0,
        },
      },
      MuiToolbar: {
        root: {
          minHeight: '45px',
        },
      },
      MuiTableCell: {
        head: {
          whiteSpace: 'nowrap',
        },
        root: {
          padding: '5px',
          textAlign: 'center',
        },
      },
      MuiIconButton: {
        root: {
          padding: '5px',
          '&:hover': {
            color: '#3c9f80',
          },
        },
      },
      MuiDialogActions: {
        root: {
          alignSelf: 'flex-end',
        },
      },
    },
  })
