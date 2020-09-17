// Prend en paramètre le titre d'un article du blog
// Et retourne le titre à un format correct pour une URL
// (pas de caractères spéciaux ni d'espaces)

export default function transformTitleToUrl(articleTitle){
  return (
    articleTitle
      .split(" ")
      .map(el => el[0].toUpperCase()+el.slice(1, el.length))
      .join("")
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "")
      .replace(/[^a-z0-9]/gi,'')
  )
}