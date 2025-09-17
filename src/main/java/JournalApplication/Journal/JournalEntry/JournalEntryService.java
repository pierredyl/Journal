package JournalApplication.Journal.JournalEntry;

import jakarta.transaction.Transactional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Objects;
import java.util.Optional;

@Service
public class JournalEntryService {

    private final JournalEntryRepository journalEntryRepository;

    @Autowired
    public JournalEntryService(JournalEntryRepository journalEntryRepository) {
        this.journalEntryRepository = journalEntryRepository;
    }


    public List<JournalEntry> getJournalEntries () {
        return journalEntryRepository.findAll();
    }

    public JournalEntry createNewJournalEntry(JournalEntry entry) {
        Optional<JournalEntry> journalEntryOptional = journalEntryRepository.findJournalEntryByName(entry.getName());

        if (journalEntryOptional.isPresent()) {
            throw new IllegalStateException("Journal name already exists.");
        }

        return journalEntryRepository.save(entry);
    }

    public void deleteJournalEntry(Long journalEntryId) {
        boolean exists = journalEntryRepository.existsById(journalEntryId);

        if (!exists) {
            throw new IllegalStateException("journal id" + journalEntryId + " does not exist");
        }

        journalEntryRepository.deleteById(journalEntryId);
    }

    public JournalEntry updateJournalEntry(JournalEntry entry) {
        journalEntryRepository.findJournalEntryById(entry.getId()).orElseThrow();

        return journalEntryRepository.save(entry);
    }

}
