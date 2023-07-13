function calculateCosineSimilarity(vectorA, vectorB) {
  const matchingValues = [
    vectorA.ipk >= vectorB.ipkMin,
    vectorA.semester >= vectorB.semester,
    Array.isArray(vectorA.jurusan) && vectorA.jurusan.includes(vectorB.jurusan),
    vectorA.tipePendanaan === vectorB.tipePendanaan,
    Array.isArray(vectorA.jenjang) && vectorA.jenjang.includes(vectorB.jenjang),
    vectorA.rangeUangSaku === vectorB.rangeUangSaku,
  ]

  const dotProduct = matchingValues.reduce(
    (sum, value) => sum + (value ? 1 : 0),
    0,
  )

  const magnitudeVectorA = Math.sqrt(matchingValues.length)
  const magnitudeVectorB = Math.sqrt(Object.values(vectorB).length)

  const cosineSimilarity =
    dotProduct / (magnitudeVectorA * magnitudeVectorB).toFixed(3)

  return cosineSimilarity
}

function calculateMatchingValues(userVector, beasiswa) {
  return [
    userVector.ipk >= beasiswa.ipkMin,
    userVector.semester >= beasiswa.semester,
    userVector.jurusan.includes('Semua Jurusan') ||
      (beasiswa.jurusan &&
        beasiswa.jurusan.some((jurusan) =>
          userVector.jurusan.includes(jurusan),
        )),
    userVector.tipePendanaan === beasiswa.tipePendanaan,
    userVector.jenjang.includes('Semua Jenjang') ||
      (beasiswa.jenjang &&
        beasiswa.jenjang.some((jenjang) =>
          userVector.jenjang.includes(jenjang),
        )),
    userVector.rangeUangSaku === beasiswa.rangeUangSaku,
  ]
}

export { calculateCosineSimilarity, calculateMatchingValues }
