import { useState } from 'react'

const useDropdownState = () => {
  const [openJurusan, setOpenJurusan] = useState(false)
  const [valueJurusan, setValueJurusan] = useState(null)

  const [openJenjang, setOpenJenjang] = useState(false)
  const [valueJenjang, setValueJenjang] = useState(null)

  const [openRangeUangSaku, setOpenRangeUangSaku] = useState(false)
  const [valueRangeUangSaku, setValueRangeUangSaku] = useState(null)

  const resetJurusan = () => {
    setValueJurusan(null)
    setOpenJurusan(false)
  }

  const resetJenjang = () => {
    setValueJenjang(null)
    setOpenJenjang(false)
  }

  const resetRangeUangSaku = () => {
    setValueRangeUangSaku(null)
    setOpenRangeUangSaku(false)
  }
  return {
    jurusanState: {
      open: openJurusan,
      value: valueJurusan,
      setOpen: setOpenJurusan,
      setValue: setValueJurusan,
      reset: resetJurusan
    },
    jenjangState: {
      open: openJenjang,
      value: valueJenjang,
      setOpen: setOpenJenjang,
      setValue: setValueJenjang,
      reset: resetJenjang
    },
    rangeUangSakuState: {
      open: openRangeUangSaku,
      value: valueRangeUangSaku,
      setOpen: setOpenRangeUangSaku,
      setValue: setValueRangeUangSaku,
      reset: resetRangeUangSaku
    },
  }
}

export default useDropdownState
