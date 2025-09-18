import ThemedComponent from './components/ThemedComponent'
import ThemeContext from './context/ThemeContext'
import Book from './components/Book';
import { Container, Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const books = [
    { id: 1, title: "React Fundamentals" },
    { id: 2, title: "Advanced React" },
    { id: 3, title: "React Hooks in Depth" },
  ];

  return (
    <Container className="mt-5">
      <h1>Library Book Availability</h1>
      <Row>
        {books.map(book => (
          <Col key={book.id} md={4} className="mb-3">
            <Book bookId={book.id} title={book.title} />
          </Col>
        ))}
      </Row>
      <Row>
        <ThemeContext.Provider value='dark'>
          <ThemedComponent/>
        </ThemeContext.Provider>
      </Row>
    </Container>
  )
}

export default App
