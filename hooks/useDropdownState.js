import { useState } from 'react'

const useDropdownState = () => {
  const [openJurusan, setOpenJurusan] = useState(false)
  const [valueJurusan, setValueJurusan] = useState(null)

  const [openJenjang, setOpenJenjang] = useState(false)
  const [valueJenjang, setValueJenjang] = useState(null)

  const [openSemester, setOpenSemester] = useState(false)
  const [valueSemester, setValueSemester] = useState(null)

  const [openTipePendanaan, setOpenTipePendanaan] = useState(false)
  const [valueTipePendanaan, setValueTipePendanaan] = useState(null)

  const [openRangeUangSaku, setOpenRangeUangSaku] = useState(false)
  const [valueRangeUangSaku, setValueRangeUangSaku] = useState(null)

  return {
    jurusanState: {
      open: openJurusan,
      value: valueJurusan,
      setOpen: setOpenJurusan,
      setValue: setValueJurusan,
    },
    jenjangState: {
      open: openJenjang,
      value: valueJenjang,
      setOpen: setOpenJenjang,
      setValue: setValueJenjang,
    },
    semesterState: {
      open: openSemester,
      value: valueSemester,
      setOpen: setOpenSemester,
      setValue: setValueSemester,
    },
    tipePendanaanState: {
      open: openTipePendanaan,
      value: valueTipePendanaan,
      setOpen: setOpenTipePendanaan,
      setValue: setValueTipePendanaan,
    },
    rangeUangSakuState: {
      open: openRangeUangSaku,
      value: valueRangeUangSaku,
      setOpen: setOpenRangeUangSaku,
      setValue: setValueRangeUangSaku,
    },
  }
}

export default useDropdownState
