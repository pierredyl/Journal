package JournalApplication.Journal.JournalEntry;

import jakarta.persistence.*;

import java.time.LocalDate;

@Entity
@Table
public class JournalEntry {

    @Id
    @SequenceGenerator(
            name = "journalentry_sequence",
            sequenceName = "journalentry_sequence",
            allocationSize = 1
    )
    @GeneratedValue(
            strategy = GenerationType.SEQUENCE,
            generator = "journalentry_sequence"
    )
    private Long id;

    @Column(columnDefinition = "TEXT")
    private String content;
    private LocalDate created;
    private String name;


    public JournalEntry(Long id, String content, LocalDate created, String name) {
        this.id = id;
        this.content = content;
        this.created = created;
        this.name = name;
    }

    public JournalEntry(String name, LocalDate created, String content) {
        this.name = name;
        this.created = created;
        this.content = content;
    }

    public JournalEntry() {
    }

    public Long getId() {
        return id;
    }

    public String getContent() {
        return content;
    }

    public LocalDate getCreated() {
        return created;
    }

    public String getName() {
        return name;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public void setContent(String content) {
        this.content = content;
    }

    public void setCreated(LocalDate created) {
        this.created = created;
    }

    public void setName(String name) {
        this.name = name;
    }

    @Override
    public String toString() {
        return "JournalEntry{" +
                "id=" + id +
                ", content='" + content + '\'' +
                ", created=" + created +
                ", name='" + name + '\'' +
                '}';
    }
}
