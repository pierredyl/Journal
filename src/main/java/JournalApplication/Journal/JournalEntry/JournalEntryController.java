package JournalApplication.Journal.JournalEntry;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping(path = "api/JournalEntry/")
public class JournalEntryController {

    private final JournalEntryService journalEntryService;

    @Autowired
    public JournalEntryController(JournalEntryService journalEntryService) {
        this.journalEntryService = journalEntryService;
    }

    @GetMapping
    public List<JournalEntry> getJournalEntries() {
        return journalEntryService.getJournalEntries();
    }

    @PostMapping
    public void createNewJournalEntry(@RequestBody JournalEntry entry) {
        journalEntryService.createNewJournalEntry(entry);
    }

    @DeleteMapping(path = "{journalEntryId}")
    public void deleteJournalEntry(@PathVariable("journalEntryId") Long id) {
        journalEntryService.deleteJournalEntry(id);
    }


}
