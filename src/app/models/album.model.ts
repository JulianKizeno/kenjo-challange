export interface Album {
    _id: string,
    title: string,
    artistId: string | null,
    coverUrl: string,
    year: number,
    genre: string
}