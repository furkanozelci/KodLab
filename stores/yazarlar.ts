import { defineStore } from "pinia";

export interface Author {
  id: number;
  name: string;
  photo: string;
}

export interface AuthorState {
  authors: Author[];
  searchQuery: string;
}

export const useAuthorStore = defineStore("authors", {
  state: (): AuthorState => ({
    authors: [
      { id: 1, name: "Can Gox", photo: "/images/authors/ca.jpg" },
      { id: 2, name: "Furkan Özelçi", photo: "/images/authors/ethem.jpg" },
      { id: 3, name: "Gökhan Gönül", photo: "/images/authors/gokhan.jpg" },
      { id: 4, name: "A. Raşit Petekçi", photo: "/images/authors/rasit.jpg" },
      { id: 5, name: "Abdul Kerim FIRAT", photo: "/images/authors/abdul.jpg" },
      { id: 6, name: "Furkan Özelçi", photo: "/images/authors/ahmet.jpg" },
      { id: 11, name: "Ronaldo", photo: "/images/authors/ronaldo.jpg" },
      { id: 12, name: "Messi", photo: "/images/authors/messi.jpg" },
      // Diğer yazarlar burada listelenebilir.
    ],
    searchQuery: "",
  }),
  
  getters: {
    filteredAuthors: (state): Author[] => {
      if (!state.searchQuery) return state.authors;
      return state.authors.filter((author) =>
        author.name.toLowerCase().includes(state.searchQuery.toLowerCase())
      );
    },
  },    
  actions: {
    setSearchQuery(query: string) {
      this.searchQuery = query;
    },
  },
});
