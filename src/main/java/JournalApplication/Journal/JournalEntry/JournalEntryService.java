package JournalApplication.Journal.JournalEntry;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;
import org.springframework.stereotype.Service;

import java.time.LocalDate;
import java.util.List;
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

    public void createNewJournalEntry(JournalEntry entry) {
        Optional<JournalEntry> journalEntryOptional = journalEntryRepository.findJournalEntryByName(entry.getName());

        if (journalEntryOptional.isPresent()) {
            throw new IllegalStateException("Journal name already exists.");
        }

        journalEntryRepository.save(entry);
    }

    public void deleteJournalEntry(Long journalEntryId) {
        boolean exists = journalEntryRepository.existsById(journalEntryId);

        if (!exists) {
            throw new IllegalStateException("journal id" + journalEntryId + " does not exist");
        }

        journalEntryRepository.deleteById(journalEntryId);
    }

}
